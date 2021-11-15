
function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

function urlHandler (req, res, next) {
    if(req.method === "POST"){
    const longUrl = `${req.body.longUrl}`;
    if(!longUrl) {
        throw {"status": 401, "messege": "url missing"};
    }
    if(isValidHttpUrl(longUrl)===false) {
        throw {"status": 401, "messege": "Please, provide a valid url"};
    }
  }
  next(); 
}
module.exports = { urlHandler };