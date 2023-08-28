var driver;(()=>{var t={580:t=>{let a={0:0,1:1,2:4,3:4,4:8,5:8,6:16,7:16,8:24,9:24,10:32,11:32,12:32},e=[[{sz:2,lbl:0},{sz:2,lbl:1},{sz:2,lbl:3},{sz:3,lbl:5},{sz:4,lbl:9},{sz:5,lbl:17},{sz:6,lbl:33},{sz:7,lbl:65},{sz:8,lbl:129},{sz:10,lbl:512},{sz:11,lbl:1026},{sz:11,lbl:1027},{sz:11,lbl:1028},{sz:11,lbl:1029},{sz:11,lbl:1030},{sz:11,lbl:1031}],[{sz:7,lbl:111},{sz:5,lbl:26},{sz:4,lbl:12},{sz:3,lbl:3},{sz:3,lbl:7},{sz:2,lbl:2},{sz:2,lbl:0},{sz:3,lbl:2},{sz:6,lbl:54},{sz:9,lbl:443},{sz:9,lbl:441},{sz:10,lbl:885},{sz:10,lbl:884},{sz:10,lbl:880},{sz:11,lbl:1763},{sz:11,lbl:1762}],[{sz:4,lbl:9},{sz:3,lbl:5},{sz:2,lbl:0},{sz:2,lbl:1},{sz:2,lbl:3},{sz:5,lbl:17},{sz:6,lbl:33},{sz:7,lbl:65},{sz:8,lbl:129},{sz:10,lbl:512},{sz:11,lbl:1026},{sz:11,lbl:1027},{sz:11,lbl:1028},{sz:11,lbl:1029},{sz:11,lbl:1030},{sz:11,lbl:1031}]];function i(t,a,e,i){return{uncompressSamples:[{data_relative_timestamp:i,data:{value:r(t,a),label:e}}],codingType:0,codingTable:0,resolution:null}}function l(t,a){for(let e=0;e<t.length;e++)if(t[e].taglbl===a.lbl)return e;throw new Error("Batch : Cannot find i1 in argList")}function s(t,a){if(a){let e=t.getNextBifromHi(1);return d(t,a,e)}return t.getNextSample(10)}function d(t,a,e){return e>14?t.getNextSample(10):e>0?function(t,a,e){return t.getNextSample(10,e)+a+Math.pow(2,e)-1}(t,a,e):a}function r(t,a){let e=t.getNextSample(a);return 12===a?function(t){let a=2147483648&t?-1:1,e=(t>>23&255)-127,i=8388607&t;if(128===e)return a*(i?Number.NaN:Number.POSITIVE_INFINITY);if(-127===e){if(0===i)return 0*a;e=-126,i/=1<<22}else i=(i|1<<23)/(1<<23);return a*i*Math.pow(2,e)}(e):e}function n(t,a,e,i,l){let s=t.getNextSample(6,l);return 0===e?function(t,a,e,i){return t>=Math.pow(2,i-1)?t*a+e:(t+1-Math.pow(2,i))*a+e}(s,i,a,l):1===e?(s+Math.pow(2,l)-1)*i+a:a-(s+(Math.pow(2,l)-1))*i}Math.trunc=Math.trunc||function(t){return isNaN(t)?NaN:t>0?Math.floor(t):Math.ceil(t)},t.exports={normalisation_batch:function(t){let r=t.date,o=function(t,r,o,u){let m=function(){let t=[],a=0;for(;a<16;)t.push({codingType:0,codingTable:0,resolution:null,uncompressSamples:[]}),a+=1;return{batch_counter:0,batch_relative_timestamp:0,series:t}}(),_=function(t){function i(t,a,e){let i=a,l=e-1;if(8*t.length<i+e)throw new Error("Batch : Verify that dest buf is large enough");let s=0,d=0;for(;e>0;)t[i>>3]&1<<(7&i)&&(d|=1<<l-s),e--,s++,i++;return d}return{i1:0,byteArray:t,getNextSample:function(t,e){let i=e||a[t],l=this.i1;if(this.i1+=i,12===t&&32!==i)throw new Error("Batch : Mauvais sampletype");let s=0,d=Math.trunc((i-1)/8)+1,r=i%8;for(0===r&&d>0&&(r=8);d>0;){let t=0;for(;r>0;){let a=l>>3;this.byteArray[a]&1<<(7&l)&&(s|=1<<8*(d-1)+t),r--,t++,l+=1}d--,r=8}if((3==t||5==t||7==t||9==t)&&s&1<<i-1)for(let t=i;t<32;t++)s|=1<<t,i++;return s},getNextBifromHi:function(t){for(let a=2;a<12;a++){let l=i(this.byteArray,this.i1,a);for(let i=0;i<e[t].length;i++)if(e[t][i].sz==a&&l==e[t][i].lbl)return this.i1+=a,i}throw new Error("Bi not found in HUFF table")}}}(function(t){for(var a=[];t.length>=2;)a.push(parseInt(t.substring(0,2),16)),t=t.substring(2,t.length);return a}(o)),p=function(t){let a=t.toString(2);for(;a.length<8;)a="0"+a;return{isCommonTimestamp:parseInt(a[a.length-2],2),hasSample:!parseInt(a[a.length-3],2),batch_req:parseInt(a[a.length-4],2),nb_of_type_measure:parseInt(a.substring(0,4),2)}}(_.getNextSample(4));m.batch_counter=_.getNextSample(4,3),_.getNextSample(4,1);let b=function(t,a,e,d,r){let n=0,o=0;for(let u=0;u<d.nb_of_type_measure;u++){let m={size:r,lbl:a.getNextSample(4,r)},_=l(e,m);0===u&&(o=_),n=s(a,n),t.series[_]=i(a,e[_].sampletype,m.lbl,n),d.hasSample&&(t.series[_].codingType=a.getNextSample(4,2),t.series[_].codingTable=a.getNextSample(4,2))}return{last_timestamp:n,i1_of_the_first_sample:o}}(m,_,r,p,t),c=b.last_timestamp,g=b.i1_of_the_first_sample;return p.hasSample&&(c=function(t,a,e,i,s,r,o){return r.isCommonTimestamp?function(t,a,e,i,s,d){let r=a.getNextSample(4,8),o={},u=function(t,a,e,i){let l=[],s=0,d=a.getNextSample(4,2);for(let r=0;r<e;r++){let e=a.getNextBifromHi(d);if(e<=14)if(0===r)l.push(t.series[i].uncompressSamples[0].data_relative_timestamp);else if(e>0){let t=l[r-1];l.push(a.getNextSample(10,e)+t+Math.pow(2,e)-1)}else l.push(precedingTimestamp);else l.push(a.getNextSample(10));s=l[r]}return{timestampCommon:l,lastTimestamp:s}}(t,a,r,e),m=u.timestampCommon,_=u.lastTimestamp;for(let e=0;e<s.nb_of_type_measure;e++){let e=1;o.lbl=a.getNextSample(4,d);let s=l(i,o);for(let l=0;l<r;l++)if(a.getNextSample(4,1)){let d=a.getNextBifromHi(t.series[s].codingTable),r={data_relative_timestamp:0,data:{}};if(d<=14){let l=t.series[s].uncompressSamples[t.series[s].uncompressSamples.length-1].data.value;if(d>0)r.data.value=n(a,l,t.series[s].codingType,i[s].resol,d);else{if(e){e=0;continue}r.data.value=l}}else r.data.value=a.getNextSample(i[s].sampletype);r.data_relative_timestamp=m[l],t.series[s].uncompressSamples.push(r)}}return _}(t,a,e,i,r,o):function(t,a,e,i,s,r){let o={};for(let u=0;u<s.nb_of_type_measure;u++){o.lbl=a.getNextSample(4,r);let s=l(e,o),u=a.getNextSample(4,8);if(u){let l=a.getNextSample(4,2);for(let r=0;r<u;r++){let r=t.series[s].uncompressSamples[t.series[s].uncompressSamples.length-1].data_relative_timestamp,o={data_relative_timestamp:0,data:{}},u=a.getNextBifromHi(l);if(o.data_relative_timestamp=d(a,r,u),o.data_relative_timestamp>i&&(i=o.data_relative_timestamp),u=a.getNextBifromHi(t.series[s].codingTable),u<=14){let i=t.series[s].uncompressSamples[t.series[s].uncompressSamples.length-1].data.value;o.data.value=u>0?n(a,i,t.series[s].codingType,e[s].resol,u):i}else o.data.value=a.getNextSample(e[s].sampletype);t.series[s].uncompressSamples.push(o)}}}return i}(t,a,i,s,r,o)}(m,_,g,r,c,p,t)),m.batch_relative_timestamp=s(_,c),function(t,a,e){let i={batch_counter:t.batch_counter,batch_relative_timestamp:t.batch_relative_timestamp};return e&&(i.batch_absolute_timestamp=e),i.dataset=t.series.reduce((function(i,l,s){return i.concat(l.uncompressSamples.map((function(i){let l={data_relative_timestamp:i.data_relative_timestamp,data:{value:a[s].divide?i.data.value/a[s].divide:i.data.value,label:a[s].taglbl}};var d,r,n;return a[s].lblname&&(l.data.label_name=a[s].lblname),e&&(l.data_absolute_timestamp=(d=e,r=t.batch_relative_timestamp,n=i.data_relative_timestamp,new Date(new Date(d)-1e3*(r-n)).toISOString())),l})))}),[]),i}(m,r,u)}(t.batch1,t.batch2,t.payload,r);console.log(o);let u=[];for(let t=0;t<o.dataset.length;t++){let a=o.dataset[t],e={variable:a.data.label_name,value:a.data.value,date:a.data_absolute_timestamp};u.push(e)}return u}}},810:(t,a,e)=>{const i=e(794),l=e(580);t.exports={watteco_decodeUplink:function(t,a,e){t.bytes,t.fPort;let s=t.recvTime;try{let d=i.normalisation_standard(t,e),r=d.payload;if("batch"!==d.type){let t=[];return Array.isArray(d.warning)&&1===d.warning.length&&(t=d.warning),{data:d.data,warnings:t}}{let t={batch1:a[0],batch2:a[1],payload:r,date:s};try{return{data:l.normalisation_batch(t),warnings:[]}}catch(t){return{error:t.message,warnings:[]}}}}catch(t){return{error:t.message,warnings:[]}}}}},794:t=>{function a(t,a){return 2===a&&(32768&t)>0&&(t-=65536),3===a&&(8388608&t)>0&&(t-=16777216),4===a&&(2147483648&t)>0&&(t-=4294967296),t}function e(t){let a=2147483648&t?-1:1,e=(t>>23&255)-127,i=8388607&t;if(128===e)return a*(i?Number.NaN:Number.POSITIVE_INFINITY);if(-127===e){if(0===i)return 0;e=-126,i/=1<<23}else i=(i|1<<23)/(1<<23);return a*i*Math.pow(2,e)}function i(t,a,e,i){void 0===i&&(i=!1);let l,s,d="U"!=e.substr(0,1),r=parseInt(e.substr(1,2),10)/8,n=r;for(i?(l=-1,s=a+r-1):l=1,s=a,tmpInt64=0,j=s;n>0;j+=l,n--)tmpInt64=(tmpInt64<<8)+t[j];return d&&r<8&&128&t[s]&&(tmpInt64-=1<<8*r),tmpInt64}function l(t,a){let e=t.toString(16).toUpperCase();for(a=null==a?a=2:a;e.length<a;)e="0"+e;return"0x"+e}function s(t){var a="",e=t.toString(2);return a+(8,String(e).padStart(8,"0"))}function d(t,a,e,i,l,d){let r=0;for(;0===e;){let n=i[d+3+t*r];if(void 0===n){console.log(a),l.zclheader.alarmmess=a,e=1;break}let o=s(n);if("1"===o[3]&&"0"===o[4]){let t="threshold",e="";e="1"===o[1]?"exceed":"fall";let i=e+" "+t+" detected";a.push(i)}if("0"===o[3]&&"1"===o[4]){let t="delta triggered";a.push(t)}r+=1}}function r(t,a,e,i,l,d,r){let n=0,o=0,u=t,m=0,_=0;for(;0===e;){let p=i[d+3+t*n];if(void 0===p){console.log(a),l.zclheader.alarmmess=a,e=1;break}t!==u&&(t=u);let b=s(p);if("1"===b[3]&&"0"===b[4]){"1"===s(i[d+6+t*n])[0]&&(o=1,t+=2);let e="threshold",l="";"1"===b[1]?(l="exceed",m=s(i[d+7+t*n])+s(i[d+8+t*n]),m=parseInt(m,2),1===o&&(_=s(i[d+9+t*n])+s(i[d+10+t*n]),_=parseInt(_,2))):(l="fall",1===o?(m=s(i[d+7+t*n])+s(i[d+8+t*n]),m=parseInt(m,2),_=s(i[d+9+t*n])+s(i[d+10+t*n]),_=parseInt(_,2)):(_=s(i[d+7+t*n])+s(i[d+8+t*n]),_=parseInt(_,2)));let u=e+" "+l+" detected: value: "+((256*i[d+4+t*n]+i[d+5+t*n])/r).toString()+" countUp: "+m+", countDown: "+_;a.push(u),1===o&&(t-=2,o=0)}if("0"===b[3]&&"1"===b[4]){let e="delta triggered : "+((256*i[d+4+(t-=3)*n]+i[d+5+t*n])/r).toString();a.push(e)}n+=1}}t.exports={normalisation_standard:function(t,n){let o="",u=t.bytes;console.log(t);let m=function(t,n){let o={lora:{}};o.lora.port=n;let u=t.length,m="";o.lora.payload="";for(let a=0;a<u;a++){m=t[a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.lora.payload+=m;let e=new Date;o.lora.date=e.toISOString()}if(125===n)if(0==!(1&t[0])){o.zclheader={},o.zclheader.report="standard";let n=-1,u=-1,_=-1;if(o.zclheader.endpoint=(224&t[0])>>5|(6&t[0])<<2,u=t[1],o.zclheader.cmdID=l(u,2),_=256*t[2]+t[3],o.zclheader.clustID=l(_,4),10===u|138===u|1===u){o.data={},n=256*t[4]+t[5],o.zclheader.attID=l(n,4);let p=0;if(10!==u&&138!==u||(p=7),138===u&&(o.zclheader.alarm=1),1===u&&(p=8,o.zclheader.status=t[6]),1026===_&&0===n&&(o.data.temperature=a(256*t[p]+t[p+1],2)/100,138===u)){let a="",e=[],i=0,l=100;void 0===t[p+2]?(a="none",console.log("je suis dans le test undefined")):(a=s(t[p+2]),console.log("je suis dans le test defined")),"none"===a&&(e.push("alarm triggered"),o.zclheader.alarmmess=e),"0"===a[2]&&"1"===a[3]&&d(1,e,i,t,o,p),"1"===a[2]&&"0"===a[3]&&r(6,e,i,t,o,p,l)}if(1029===_&&0===n){o.data.humidity=(256*t[p]+t[p+1])/100,void 0!==t[p+2]&&s(t[p+2]);let a=[],e=0,i=100,l="";void 0===t[p+2]?(l="none",console.log("je suis dans le test undefined")):(l=s(t[p+2]),console.log("je suis dans le test defined")),"none"===l&&(a.push("alarm triggered"),o.zclheader.alarmmess=a),"0"===l[2]&&"1"===l[3]&&d(1,a,e,t,o,p),"1"===l[2]&&"0"===l[3]&&r(6,a,e,t,o,p,i)}if(15===_&&1026===n&&(o.data.counter=256*t[p]*256*256+256*t[p+1]*256+256*t[p+2]+t[p+3]),15===_&&85===n&&(o.data.pin_state=!!t[p]),19===_&&85===n&&(o.data.value=t[p]),6===_&&0===n){let a=t[p];o.data.state=1===a?"ON":"OFF"}if(32776===_&&0===n&&(o.data.differential_pressure=256*t[p]+t[p+1]),32773===_&&0===n&&(o.data.pin_state_1=1==(1&t[p+1]),o.data.pin_state_2=2==(2&t[p+1]),o.data.pin_state_3=4==(4&t[p+1]),o.data.pin_state_4=8==(8&t[p+1]),o.data.pin_state_5=16==(16&t[p+1]),o.data.pin_state_6=32==(32&t[p+1]),o.data.pin_state_7=64==(64&t[p+1]),o.data.pin_state_8=128==(128&t[p+1]),o.data.pin_state_9=1==(1&t[p]),o.data.pin_state_10=2==(2&t[p])),12===_&&85===n&&(o.data.analog=e(256*t[p]*256*256+256*t[p+1]*256+256*t[p+2]+t[p+3])),32775===_&&1===n){o.data.payload="",o.data.modbus_payload="",o.data.size=t[p],o.data.modbus_float=0;for(let a=0;a<o.data.size;a++)m=t[p+a+1].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.payload+=m,0===a?o.data.modbus_address=t[p+a+1]:1===a?o.data.modbus_commandID=t[p+a+1]:2===a?o.data.modbus_size=t[p+a+1]:(o.data.modbus_payload+=m,1===o.data.modbus_float&&(3===a&&(o.data.fregister_00=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),7===a&&(o.data.fregister_01=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),11===a&&(o.data.fregister_02=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),15===a&&(o.data.fregister_03=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),19===a&&(o.data.fregister_04=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),23===a&&(o.data.fregister_05=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),27===a&&(o.data.fregister_06=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),31===a&&(o.data.fregister_07=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),35===a&&(o.data.fregister_08=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3])),35===a&&(o.data.fregister_09=e(256*t[p+a+1]*256*256+256*t[p+a+1+1]*256+256*t[p+a+1+2]+t[p+a+1+3]))),2===o.data.modbus_float&&(3===a&&(o.data.fregister_00=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),7===a&&(o.data.fregister_01=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),11===a&&(o.data.fregister_02=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),15===a&&(o.data.fregister_03=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),19===a&&(o.data.fregister_04=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),23===a&&(o.data.fregister_05=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),27===a&&(o.data.fregister_06=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),31===a&&(o.data.fregister_07=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),35===a&&(o.data.fregister_08=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256)),35===a&&(o.data.fregister_09=e(256*t[p+a+1]+t[p+a+1+1]+256*t[p+a+1+2]*256*256+256*t[p+a+1+3]*256))))}if(32777===_&&0===n){if(o.data.payloads="",o.data.size=t[p],o.data.multimodbus_frame_series_sent=t[p+1],o.data.multimodbus_frame_number_in_serie=(224&t[p+2])>>5,o.data.multimodbus_last_frame_of_serie=(28&t[p+2])>>2,o.data.multimodbus_EP9=1==(1&t[p+2]),o.data.multimodbus_EP8=2==(2&t[p+2]),o.data.multimodbus_EP7=128==(128&t[p+3]),o.data.multimodbus_EP6=64==(64&t[p+3]),o.data.multimodbus_EP5=32==(32&t[p+3]),o.data.multimodbus_EP4=16==(16&t[p+3]),o.data.multimodbus_EP3=8==(8&t[p+3]),o.data.multimodbus_EP2=4==(4&t[p+3]),o.data.multimodbus_EP1=2==(2&t[p+3]),o.data.multimodbus_EP0=1==(1&t[p+3]),i2=p+4,without_header=0,!0===o.data.multimodbus_EP0){if(0===without_header&&(o.data.multimodbus_EP0_slaveID=t[i2],i2+=1,o.data.multimodbus_EP0_fnctID=t[i2],i2+=1,o.data.multimodbus_EP0_datasize=t[i2],i2+=1),o.data.multimodbus_EP0_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP0_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP0_payload+=m;i2+=o.data.multimodbus_EP0_datasize}if(!0===o.data.multimodbus_EP1){if(0===without_header&&(o.data.multimodbus_EP1_slaveID=t[i2],i2+=1,o.data.multimodbus_EP1_fnctID=t[i2],i2+=1,o.data.multimodbus_EP1_datasize=t[i2],i2+=1),o.data.multimodbus_EP1_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP1_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP1_payload+=m;i2+=o.data.multimodbus_EP1_datasize}if(!0===o.data.multimodbus_EP2){if(0===without_header&&(o.data.multimodbus_EP2_slaveID=t[i2],i2+=1,o.data.multimodbus_EP2_fnctID=t[i2],i2+=1,o.data.multimodbus_EP2_datasize=t[i2],i2+=1),o.data.multimodbus_EP2_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP2_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP2_payload+=m;i2+=o.data.multimodbus_EP2_datasize}if(!0===o.data.multimodbus_EP3){if(0===without_header&&(o.data.multimodbus_EP3_slaveID=t[i2],i2+=1,o.data.multimodbus_EP3_fnctID=t[i2],i2+=1,o.data.multimodbus_EP3_datasize=t[i2],i2+=1),o.data.multimodbus_EP3_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP3_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP3_payload+=m;i2+=o.data.multimodbus_EP3_datasize}if(!0===o.data.multimodbus_EP4){if(0===without_header&&(o.data.multimodbus_EP4_slaveID=t[i2],i2+=1,o.data.multimodbus_EP4_fnctID=t[i2],i2+=1,o.data.multimodbus_EP4_datasize=t[i2],i2+=1),o.data.multimodbus_EP4_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP4_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP4_payload+=m;i2+=o.data.multimodbus_EP4_datasize}if(!0===o.data.multimodbus_EP5){if(0===without_header&&(o.data.multimodbus_EP5_slaveID=t[i2],i2+=1,o.data.multimodbus_EP5_fnctID=t[i2],i2+=1,o.data.multimodbus_EP5_datasize=t[i2],i2+=1),o.data.multimodbus_EP5_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP5_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP5_payload+=m;i2+=o.data.multimodbus_EP5_datasize}if(!0===o.data.multimodbus_EP6){if(0===without_header&&(o.data.multimodbus_EP6_slaveID=t[i2],i2+=1,o.data.multimodbus_EP6_fnctID=t[i2],i2+=1,o.data.multimodbus_EP6_datasize=t[i2],i2+=1),o.data.multimodbus_EP6_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP6_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP6_payload+=m;i2+=o.data.multimodbus_EP6_datasize}if(!0===o.data.multimodbus_EP7){if(0===without_header&&(o.data.multimodbus_EP7_slaveID=t[i2],i2+=1,o.data.multimodbus_EP7_fnctID=t[i2],i2+=1,o.data.multimodbus_EP7_datasize=t[i2],i2+=1),o.data.multimodbus_EP7_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP7_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP7_payload+=m;i2+=o.data.multimodbus_EP7_datasize}if(!0===o.data.multimodbus_EP8){if(0===without_header&&(o.data.multimodbus_EP8_slaveID=t[i2],i2+=1,o.data.multimodbus_EP8_fnctID=t[i2],i2+=1,o.data.multimodbus_EP8_datasize=t[i2],i2+=1),o.data.multimodbus_EP8_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP8_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP8_payload+=m;i2+=o.data.multimodbus_EP8_datasize}if(!0===o.data.multimodbus_EP9){if(0===without_header&&(o.data.multimodbus_EP6_slaveID=t[i2],i2+=1,o.data.multimodbus_EP6_fnctID=t[i2],i2+=1,o.data.multimodbus_EP6_datasize=t[i2],i2+=1),o.data.multimodbus_EP6_payload="",void 0===t[i2])return o;for(let a=0;a<o.data.multimodbus_EP6_datasize;a++)m=t[i2+a].toString(16).toUpperCase(),1===m.length&&(m="0"+m),o.data.multimodbus_EP6_payload+=m;i2+=o.data.multimodbus_EP6_datasize}}if(82===_&&0===n&&(o.data.active_energy_Wh=a(256*t[p+1]*256+256*t[p+2]+t[p+3],3),o.data.reactive_energy_Varh=a(256*t[p+4]*256+256*t[p+5]+t[p+6],3),o.data.nb_samples=256*t[p+7]+t[p+8],o.data.active_power_W=a(256*t[p+9]+t[p+10],2),o.data.reactive_power_let=a(256*t[p+11]+t[p+12],2)),32772===_&&0===n&&(1===t[p]&&(o.data.message_type="confirmed"),0===t[p]&&(o.data.message_type="unconfirmed")),32772===_&&1===n&&(o.data.nb_retry=t[p]),32772===_&&2===n&&(o.data.period_in_minutes=256*t[p+1]+t[p+2],o.data.nb_err_frames=256*t[p+3]+t[p+4]),80===_&&6===n){let a=p+3;1==(1&t[p+2])&&(o.data.main_or_external_voltage=(256*t[a]+t[a+1])/1e3,a+=2),2==(2&t[p+2])&&(o.data.rechargeable_battery_voltage=(256*t[a]+t[a+1])/1e3,a+=2),4==(4&t[p+2])&&(o.data.disposable_battery_voltage=(256*t[a]+t[a+1])/1e3,a+=2),8==(8&t[p+2])&&(o.data.solar_harvesting_voltage=(256*t[a]+t[a+1])/1e3,a+=2),16==(16&t[p+2])&&(o.data.tic_harvesting_voltage=(256*t[a]+t[a+1])/1e3,a+=2)}if(32778===_&&0===n){let e=p;o.data.sum_positive_active_energy_Wh=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.sum_negative_active_energy_Wh=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.sum_positive_reactive_energy_Wh=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.sum_negative_reactive_energy_Wh=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.positive_active_power_W=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.negative_active_power_W=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.positive_reactive_power_W=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4),e+=4,o.data.negative_reactive_power_W=a(256*t[e+1]*256*256+256*t[e+2]*256+256*t[e+3]+t[e+4],4)}if(32784===_&&0===n?(o.data.ActiveEnergyWhPhaseA=Int32UnsignedToSigned(256*t[p+1]*256*256+256*t[p+2]*256+256*t[p+3]+t[p+4]),o.data.ReactiveEnergyWhPhaseA=Int32UnsignedToSigned(256*t[p+5]*256*256+256*t[p+6]*256+256*t[p+7]+t[p+8]),o.data.ActiveEnergyWhPhaseB=Int32UnsignedToSigned(256*t[p+9]*256*256+256*t[p+10]*256+256*t[p+11]+t[p+12]),o.data.ReactiveEnergyWhPhaseB=Int32UnsignedToSigned(256*t[p+13]*256*256+256*t[p+14]*256+256*t[p+15]+t[p+16]),o.data.ActiveEnergyWhPhaseC=Int32UnsignedToSigned(256*t[p+17]*256*256+256*t[p+18]*256+256*t[p+19]+t[p+20]),o.data.ReactiveEnergyWhPhaseC=Int32UnsignedToSigned(256*t[p+21]*256*256+256*t[p+22]*256+256*t[p+23]+t[p+24]),o.data.ActiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*t[p+25]*256*256+256*t[p+26]*256+256*t[p+27]+t[p+28]),o.data.ReactiveEnergyWhPhaseABC=Int32UnsignedToSigned(256*t[p+29]*256*256+256*t[p+30]*256+256*t[p+31]+t[p+32])):32784===_&&1===n&&(o.data.ActivePowerWPhaseA=Int32UnsignedToSigned(256*t[p+1]*256*256+256*t[p+2]*256+256*t[p+3]+t[p+4]),o.data.ReactivePowerWPhaseA=Int32UnsignedToSigned(256*t[p+5]*256*256+256*t[p+6]*256+256*t[p+7]+t[p+8]),o.data.ActivePowerWPhaseB=Int32UnsignedToSigned(256*t[p+9]*256*256+256*t[p+10]*256+256*t[p+11]+t[p+12]),o.data.ReactivePowerWPhaseB=Int32UnsignedToSigned(256*t[p+13]*256*256+256*t[p+14]*256+256*t[p+15]+t[p+16]),o.data.ActivePowerWPhaseC=Int32UnsignedToSigned(256*t[p+17]*256*256+256*t[p+18]*256+256*t[p+19]+t[p+20]),o.data.ReactivePowerWPhaseC=Int32UnsignedToSigned(256*t[p+21]*256*256+256*t[p+22]*256+256*t[p+23]+t[p+24]),o.data.ActivePowerWPhaseABC=Int32UnsignedToSigned(256*t[p+25]*256*256+256*t[p+26]*256+256*t[p+27]+t[p+28]),o.data.ReactivePowerWPhaseABC=Int32UnsignedToSigned(256*t[p+29]*256*256+256*t[p+30]*256+256*t[p+31]+t[p+32])),32779===_&&0===n){let e=p;o.data.Vrms=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Irms=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.phase_angle=a(256*t[e+1]+t[e+2],2)}if(32781===_&&0===n&&(o.data.VrmsA=a(256*t[p+1]+t[p+2],2)/10,o.data.IrmsA=a(256*t[p+3]+t[p+4],2)/10,o.data.PhaseA=a(256*t[p+5]+t[p+6],2),o.data.VrmsB=a(256*t[p+7]+t[p+8],2)/10,o.data.IrmsB=a(256*t[p+9]+t[p+10],2)/10,o.data.PhaseB=a(256*t[p+11]+t[p+12],2),o.data.VrmsC=a(256*t[p+13]+t[p+14],2)/10,o.data.IrmsC=a(256*t[p+15]+t[p+16],2)/10,o.data.PhaseC=a(256*t[p+17]+t[p+18],2)),32780===_&&0===n&&(o.data.Concentration=256*t[p]+t[p+1]),1024===_&&0===n&&(o.data.Illuminance=256*t[p]+t[p+1]),1027===_&&0===n&&(o.data.Pressure=a(256*t[p]+t[p+1],2)),1030===_&&0===n&&(o.data.Occupancy=!!t[p]),32850===_&&0===n){let e=p;o.data.frequency=(a(256*t[e+1]+t[e+2],2)+22232)/1e3,e+=2,o.data.frequency_min=(a(256*t[e+1]+t[e+2],2)+22232)/1e3,e+=2,o.data.frequency_max=(a(256*t[e+1]+t[e+2],2)+22232)/1e3,e+=2,o.data.Vrms=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Vrms_min=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Vrms_max=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Vpeak=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Vpeak_min=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.Vpeak_max=a(256*t[e+1]+t[e+2],2)/10,e+=2,o.data.over_voltage=a(256*t[e+1]+t[e+2],2),e+=2,o.data.sag_voltage=a(256*t[e+1]+t[e+2],2)}if(32783===_){let a=p+1;if(0===n){let e=o.data.Last={};e.NbTriggedAcq=i(t,a,"U32"),a+=4,e.Mean_X_G=i(t,a,"U16")/100,a+=2,e.Max_X_G=i(t,a,"U16")/100,a+=2,e.Dt_X_ms=i(t,a,"U16"),a+=2,e.Mean_Y_G=i(t,a,"U16")/100,a+=2,e.Max_Y_G=i(t,a,"U16")/100,a+=2,e.Dt_Y_ms=i(t,a,"U16"),a+=2,e.Mean_Z_G=i(t,a,"U16")/100,a+=2,e.Max_Z_G=i(t,a,"U16")/100,a+=2,e.Dt_Z_ms=i(t,a,"U16")}else if(1===n||2===n||3===n){let e=1===n?"Stats_X":2===n?"Stats_Y":"Stats_Z",l=o.data[e]={};l.NbAcq=i(t,a,"U16"),a+=2,l.MinMean_G=i(t,a,"U16")/100,a+=2,l.MinMax_G=i(t,a,"U16")/100,a+=2,l.MinDt=i(t,a,"U16"),a+=2,l.MeanMean_G=i(t,a,"U16")/100,a+=2,l.MeanMax_G=i(t,a,"U16")/100,a+=2,l.MeanDt=i(t,a,"U16"),a+=2,l.MaxMean_G=i(t,a,"U16")/100,a+=2,l.MaxMax_G=i(t,a,"U16")/100,a+=2,l.MaxDt=i(t,a,"U16"),a+=2}else if(32768===n){let e=o.data.Params={};e.WaitFreq_Hz=i(t,a,"U16")/10,a+=2,e.AcqFreq_Hz=i(t,a,"U16")/10,a+=2;let l=i(t,a,"U16");a+=2,32768&l&&(l=60*(-32769&l)),e.NewWaitDelay_s=32768&l?l=60*(-32769&l):l,e.MaxAcqDuration_ms=i(t,a,"U16"),a+=2,e.Threshold_X_G=i(t,a,"U16")/100,a+=2,e.Threshold_Y_G=i(t,a,"U16")/100,a+=2,e.Threshold_Z_G=i(t,a,"U16")/100,a+=2,e.OverThrsh_Dt_ms=i(t,a,"U16"),a+=2,e.UnderThrsh_Dt_ms=i(t,a,"U16"),a+=2,e.Range_G=i(t,a,"U16")/100,a+=2,e.FilterSmoothCoef=i(t,a,"U8"),a+=1,e.FilterGainCoef=i(t,a,"U8"),a+=1,e=o.data.Params.WorkingModes={},e.SignalEachAcq=128&t[a]?"true":"false",e.RstAftStdRpt_X=1&t[a]?"true":"false",e.RstAftStdRpt_Y=2&t[a]?"true":"false",e.RstAftStdRpt_7=4&t[a]?"true":"false"}}}7===u&&(n=256*t[6]+t[7],o.zclheader.attID=l(n,4),o.zclheader.status=t[4],o.zclheader.batch=t[5]),9===u&&(n=256*t[6]+t[7],o.zclheader.attID=l(n,4),o.zclheader.status=t[4],o.zclheader.batch=t[5],o.zclheader.attribut_type=t[8],o.zclheader.min={},128==(128&t[9])?(o.zclheader.min.value=256*(t[9]-128)+t[10],o.zclheader.min.unity="minutes"):(o.zclheader.min.value=256*t[9]+t[10],o.zclheader.min.unity="seconds"),o.zclheader.max={},128==(128&t[11])?(o.zclheader.max.value=256*(t[11]-128)+t[12],o.zclheader.max.unity="minutes"):(o.zclheader.max.value=256*t[11]+t[12],o.zclheader.max.unity="seconds"),o.lora.payload="")}else o.batch={},o.batch.report="batch";return o}(u,t.fPort);if(console.log(m),void 0!==m.zclheader&&m.zclheader.alarm&&(o=m.zclheader.alarmmess,console.log(o)),7===u[1]&&u[0]%2!=0)return{data:{variable:"configure reporting response status",value:m.zclheader.status,date:t.recvTime},warning:o};if(9===u[1])return{data:{variable:"read reporting configuration response status",value:m.zclheader.status,date:t.recvTime},warning:o};if(1===u[1])return void 0===m.zclheader.data?{data:{variable:"read reporting configuration response status",value:"no data",date:t.recvTime},warning:o}:{data:{variable:"read reporting configuration response status",value:m.zclheader.data,date:t.recvTime},warning:o};if(void 0!==m.zclheader){if(void 0!==n){let a=m.zclheader.endpoint,e=Object.keys(m.data)[0];return{data:{variable:n[e][a],value:m.data[e],date:t.recvTime},type:"standard",warning:o}}{let a=Object.keys(m.data)[0];return{data:{variable:a,value:m.data[a],date:t.recvTime},type:"standard",warning:o}}}return{type:m.batch.report,payload:m.lora.payload}}}}},a={};function e(i){var l=a[i];if(void 0!==l)return l.exports;var s=a[i]={exports:{}};return t[i](s,s.exports,e),s.exports}var i={};(()=>{var t=i;let a=e(810),l=[2,[{taglbl:0,resol:10,sampletype:7,lblname:"temperature",divide:100},{taglbl:1,resol:100,sampletype:6,lblname:"humidity",divide:100},{taglbl:2,resol:1,sampletype:6,lblname:"battery_voltage",divide:1e3},{taglbl:3,resol:1,sampletype:1,lblname:"open_case",divide:1}]];t.decodeUplink=function(t){return a.watteco_decodeUplink(t,l)}})(),driver=i})();