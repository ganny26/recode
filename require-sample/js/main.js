requirejs.config({
    baseUrl: 'js/',
    paths: {
    	tether:'tether',
        jquery: 'jquery-2.1',
        bootstrapjs: 'bootstrap',
        s1:'script1',
        s2:'script2',
        s3:'script3'
    },
    shim:{
    	bootstrapjs:{
    		deps:['jquery']
    	}
    }
});

requirejs(["app"]);