# zsign

*npm install zsign --save


## Syntax Guide
```javascript
var ZSign = require('zsign');
var zsign = new ZSign();

//sign data --> returns __signature__
zsign.sign(<payload>, <secretKey>);


//verify signature --> returns boolean
zsign.verify(<payload>, <secretKey>, <hash>);

```

parameter |  | type | description
------------ | ------------- | ------------- | -------------
payload | required | string | data to be signed
secretKey | required | string | key used in signing
hash/signature | required | string | signature to be verified/compared