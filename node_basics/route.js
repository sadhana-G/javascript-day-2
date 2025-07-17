const http = require('http');
const server = http.createServer((req,res) =>
{
    if(req.url === '/')
    {
        res.end('Home page parka vandharthaku nandri...');

    }
    else if(req.url === '/about us')
    {
        res.end('nan konjam mutta paiyan ... yen friend konjam morattu paiyan... avlothanga..');
    }
    else if(req.url === '/contact')
    {
        res.end('idhula onum ila vera website ku poi parunga..');
    }
    else if(req.url === '/profile')
    {
        res.end('yenga veetula na orea pula...yen friends ku na than chellapula...idhulam irukatum...sariii yena pathi ivlo ketingalae...ungala pathi konjam solunga kepom..');
    }
    else if(req.url === '/work_experience')
    {
        res.end('sumaaar...22 aandugala house keeping experince iruku.. animals and pets (my spl friends)aa handle pandrathula oru...5 to 6 yrs experience iruku.. mathapadi onum ila ungaluku yedhachum therinja konjam sollithanga... i think neegalum yenamarithan nu ninaikiren..if i am right pls visit our page again');
    }
    else{
    res.statusCode = 404;
    res.end('podhum...pa.. idhoda off panikalam. ayya... romba busy . yenoda brother Mart yena US ku dinner ku kupturukaru Bye........');
    }
});
server.listen(5000);