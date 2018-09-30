'use strict';var e=require('commander'),n=require('path'),i=require("fs"),r=require("./config/common"),o=r.project_dir,c=r.API_LEVEL,t=r.SDK_VERSION;r.exec,r.execSync,r.makeDirs;e.version("api_level:"+c).usage("[options] <packageName>").option("-m, --models <models>","\u56fa\u4ef6 model","").option("-u, --developer <miID>","\u5f00\u53d1\u8005\u8d26\u53f7","").description("\u751f\u6210\u9879\u76ee").parse(process.argv);var s=e.args[0],a=n.join(o,"projects",s);if(i.existsSync(a))throw e.outputHelp(),"the package is exist or invalid package";i.mkdirSync(a),i.writeFileSync(n.join(a,"project.json"),'{\n    "package_name": "'+s+'",\n    "developer_id": "'+(e.developer||'')+'",\n    "models": "'+(e.models||'')+'",\n    "min_sdk_api_level":'+c+'\n}'),i.writeFileSync(n.join(a,"package.json"),'{\n    "name": "project-'+s.replace(/[.]/g,'-')+'",\n    "version": "'+t+'",\n    "scripts":{\n        "start":"node ../../bin/runProject.js"\n    },\n    "dependencies":{\n        \n    }\n}'),i.writeFileSync(n.join(a,"index.ios.js"),'import "./index.js";'),i.writeFileSync(n.join(a,"index.js"),'\n    import React from \'react\';\n    import {Package,Device,Service,Host} from \'miot\';\n    import {PackageEvent, DeviceEvent} from \'miot\';\n\n    class App extends React.Component{\n        render(){\n            return null;\n        }\n    }\n    Package.entry(App, ()=>{\n\n    })\n'),i.mkdirSync(n.join(a,"resources")),i.mkdirSync(n.join(a,"build"));