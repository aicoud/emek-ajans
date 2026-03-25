const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Not Allowed' };
  
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ success: false, error: "GITHUB_TOKEN ayarı Netlify'da tanımlanmamış." }) 
    };
  }

  const owner = 'aicoud';
  const repo = 'emek-ajans';
  const path = 'admin/content.json';
  const branch = 'main'; // Eğer test dalı varsa name'ini değiştireceğiz

  try {
    // Check Payload
    const payloadBuffer = Buffer.from(event.body, 'utf8');
    
    // 1. Get file SHA if it exists
    const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    const getRes = await fetch(getUrl, {
      headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github.v3+json' }
    });
    
    let sha = null;
    if (getRes.ok) {
      const getJson = await getRes.json();
      sha = getJson.sha;
    }

    // 2. Put file
    const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const putBody = {
      message: 'Automated CMS deploy from Dashboard 🚀',
      content: payloadBuffer.toString('base64'),
      branch: branch
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify(putBody)
    });

    if (!putRes.ok) {
      const errorJson = await putRes.text();
      return { statusCode: Math.max(putRes.status, 400), body: JSON.stringify({ success: false, error: "GitHub'a gönderim başarısız", details: errorJson }) };
    }

    return { 
      statusCode: 200, 
      body: JSON.stringify({ success: true, message: "Kayıt başarıyla GitHub'a gönderildi. Netlify bir dakika içinde siteyi derleyip canlıya alacaktır." }) 
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
