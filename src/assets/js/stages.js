var stages = function() {

  var howToReview = '#';
  var requestRevisions = '#';
  var styleGuide = '/stages/styleguide.html';
  var styleGuideStatus = 'inactive';
  var wireframes = '/stages/wireframes.html';
  var wireframesStatus = 'inactive';
  var componentLib = '/stages/componentlib.html';
  var componentLibStatus = 'inactive';
  var staticLayouts = '/';
  var staticLayoutsStatus = 'inactive';
  var cms = '#';
  var cmsStatus = 'inactive';

  $('head').append('<style>.serviceMenu-wrap{position:fixed;z-index:9999;overflow-y:auto;-webkit-transition:all ease .25s;transition:all ease .25s;box-shadow:none;right:-200px;top:50%;margin-top:-30px;padding-left:60px}.serviceMenu-wrap.is-active{right:0}.serviceMenu-button{position:absolute;width:60px;height:60px;left:0;top:0;background:#5cb2f2;font-size:0;border-radius:0}.serviceMenu-button svg{width:80%;height:80%}.serviceMenu{width:200px}.serviceMenu li a{font-size:14px;color:#fff}.serviceMenu li:nth-child(odd) a{background:#93ccf6}.serviceMenu li:nth-child(even) a{background:#2199e8}.serviceMenu li a:hover{background:rgba(147,204,246,.72)}.serviceMenu li.inactive a,.serviceMenu li.inactive a:hover{background:#567285!important;color:#a0b7c6;cursor:default}</style>');
  $('body').append('<div class="serviceMenu-wrap" id="serviceMenu"><button class="serviceMenu-button">Toggle Service Menu<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="319px" height="273px" viewBox="0 0 319 273" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="SSM-Icon" fill="#A0CEF6"><g id="Logomark" transform="translate(51.000000, 0.000000)"><path d="M99.2141565,139.307713 C97.7393639,138.172017 95.9893159,137.504452 94.0725644,137.504452 L33.7257902,137.504452 C26.7886088,137.504452 22.0350593,146.248812 24.6113618,154.282792 C30.986673,174.163868 46.1763229,188.154844 63.8975811,188.154844 C81.6220317,188.154844 96.8116816,174.163868 103.186993,154.282792 C103.517241,153.25294 103.727046,152.211415 103.827248,151.178132 C106.631214,150.218686 109.927327,149.621363 113.460598,149.621363 C113.59468,149.621363 113.728763,149.621363 113.866038,149.624549 C117.256043,149.66707 120.372279,150.239836 123.027253,151.14057 C123.100853,152.347688 123.322471,153.57084 123.709563,154.777954 C130.084874,174.659029 145.274524,188.650006 162.998975,188.650006 C180.720233,188.650006 195.909883,174.659029 202.285194,154.777954 C204.861497,146.743973 200.107947,137.999613 193.170766,137.999613 L132.823992,137.999613 C131.112301,137.999613 129.533553,138.531982 128.165054,139.45469 C123.928458,137.866379 119.117758,136.948328 114.028853,136.882312 C108.712905,136.825688 103.662639,137.703363 99.2141565,139.307713 Z M98.0426507,253.999613 C94.4816376,253.999613 92.0415323,257.184989 93.3640071,260.111589 C96.6365995,267.353823 104.433793,272.450425 113.532157,272.450425 C122.628882,272.450425 130.426075,267.353823 133.698668,260.111589 C135.021143,257.184989 132.581037,253.999613 129.020024,253.999613 L98.0426507,253.999613 Z M15.2929362,39.738191 C-5.49306849,66.4299923 -0.0786829954,99.856066 3.00521818,118.889783 C3.92144968,124.550522 5.9199198,136.413545 9.77320004,136.712987 C13.7286385,137.021986 17.8468916,124.9965 20.1869533,118.153919 C27.593424,96.5271566 24.7489561,86.7538606 30.8624869,82.8706638 C37.4197675,78.7103234 46.3203021,86.3811502 58.8761855,91.4270761 C101.57832,108.587684 150.301405,80.8319059 167.192627,67.2805367 C178.762045,58.0010024 183.327241,49.0240963 184.92027,45.54228 C187.014514,40.9710024 191.400932,31.3888401 189.616356,24.3901663 C183.384705,-0.0430735243 96.7098426,-13.498876 38.7893261,20.156558 C25.5279126,27.8592404 18.970632,35.0140065 15.2929362,39.738191 Z M33.2338345,130.035907 C34.4310012,132.189345 41.8342794,129.561258 49.5568021,128.086345 C57.5411053,126.560462 68.8519354,125.700361 83.3903266,128.650189 C83.9266572,128.513209 86.7998571,127.723191 87.8182468,125.238455 C88.8206743,122.795131 87.2372219,120.332693 87.1159091,119.816633 C86.1645607,115.669034 71.0451446,114.088997 60.1142154,115.885652 C52.1299122,117.201288 50.5847692,118.023163 39.1973205,121.724783 C35.3089233,122.98945 32.2537542,128.274293 33.2338345,130.035907 Z M195.436626,130.035907 C194.239459,132.189345 186.836181,129.561258 179.113658,128.086345 C171.129355,126.560462 159.818525,125.700361 145.280134,128.650189 C144.743803,128.513209 141.870603,127.723191 140.852214,125.238455 C139.849786,122.795131 141.433238,120.332693 141.554551,119.816633 C142.5059,115.669034 157.625316,114.088997 168.556245,115.885652 C176.540548,117.201288 178.085691,118.023163 189.47314,121.724783 C193.361537,122.98945 196.416706,128.274293 195.436626,130.035907 Z" id="Combined-Shape"></path><path d="M76.9823254,205.819169 C76.7085929,206.155554 76.4345378,206.504097 76.160398,206.865227 C67.2151692,220.381555 57.5261008,234.48084 43.192026,233.337225 C36.3346557,232.789308 33.6242705,225.303244 34.5915811,221.324481 C34.9670506,219.776071 35.5565811,217.847263 36.9538503,216.357518 C38.2839207,218.664678 40.5992467,220.38237 43.4352902,220.859707 C48.4697749,221.703881 53.2360942,218.317631 54.0852843,213.294004 C54.9025739,208.440849 51.7631473,203.834456 47.0099813,202.766299 C42.5328237,201.399228 28.2271181,199.340984 19.4210859,214.536054 C12.2348938,226.940622 19.7339454,241.033536 21.3173978,243.645695 C30.9011155,259.461996 44.9606401,261.038848 52.6512384,260.567386 C80.4542356,258.859926 101.300897,241.562339 108.978725,235.493848 L108.92531,235.351213 C110.97652,233.676497 112.718896,231.63907 114.054068,229.33705 C115.388993,231.634308 117.129314,233.667893 119.177315,235.340382 L119.119844,235.493848 C126.797672,241.562339 147.644333,258.859926 175.447331,260.567386 C183.137929,261.038848 197.197453,259.461996 206.781171,243.645695 C208.364623,241.033536 215.863675,226.940622 208.677483,214.536054 C199.871451,199.340984 185.565745,201.399228 181.088588,202.766299 C176.335422,203.834456 173.195995,208.440849 174.013285,213.294004 C174.862475,218.317631 179.628794,221.703881 184.663279,220.859707 C187.499322,220.38237 189.814648,218.664678 191.144719,216.357518 C192.541988,217.847263 193.131518,219.776071 193.506988,221.324481 C194.474298,225.303244 191.763913,232.789308 184.906543,233.337225 C170.572468,234.48084 160.8834,220.381555 151.938171,206.865227 C151.817026,206.705641 151.695898,206.548513 151.574808,206.393806 C147.651607,200.36764 140.84631,196.382188 133.107858,196.382188 C124.959633,196.382188 117.844572,200.800896 114.039828,207.367989 C110.234932,200.827346 103.140215,196.429016 95.0175279,196.429016 C93.5417768,196.429016 92.0999869,196.574122 90.7057062,196.850816 C89.3881165,197.062066 87.7899763,197.498456 86.0147773,198.346936 C82.367682,199.982646 79.2484108,202.581611 76.9823254,205.819169 Z" id="Combined-Shape"></path></g><g id="Stars" transform="translate(0.000000, 134.000000)"><path d="M301.804484,59.909484 C295.970853,59.909484 291.663472,66.9979958 290.137222,65.4717458 C288.610972,63.9454958 295.699484,59.6381148 295.699484,53.8044839 C295.699484,47.9708529 288.610972,43.663472 290.137222,42.137222 C291.663472,40.610972 295.970853,47.6994838 301.804484,47.6994838 C307.638115,47.6994838 311.945496,40.610972 313.471746,42.137222 C314.997996,43.663472 307.909484,47.9708529 307.909484,53.8044839 C307.909484,59.6381148 314.997996,63.9454958 313.471746,65.4717458 C311.945496,66.9979958 307.638115,59.909484 301.804484,59.909484 Z" id="4" transform="translate(301.804484, 53.804484) rotate(-45.000000) translate(-301.804484, -53.804484) "></path><path d="M16.8044839,22.909484 C10.9708529,22.909484 6.66347202,29.9979958 5.137222,28.4717458 C3.61097198,26.9454958 10.6994838,22.6381148 10.6994838,16.8044839 C10.6994838,10.9708529 3.61097198,6.66347202 5.137222,5.137222 C6.66347202,3.61097198 10.9708529,10.6994838 16.8044839,10.6994838 C22.6381148,10.6994838 26.9454958,3.61097198 28.4717458,5.137222 C29.9979958,6.66347202 22.909484,10.9708529 22.909484,16.8044839 C22.909484,22.6381148 29.9979958,26.9454958 28.4717458,28.4717458 C26.9454958,29.9979958 22.6381148,22.909484 16.8044839,22.909484 Z" id="3" transform="translate(16.804484, 16.804484) rotate(-45.000000) translate(-16.804484, -16.804484) "></path><path d="M275.902242,20.4996858 C272.464706,20.4996858 269.92653,24.6766757 269.027169,23.7773147 C268.127808,22.8779538 272.304798,20.3397783 272.304798,16.9022419 C272.304798,13.4647055 268.127808,10.9265301 269.027169,10.0271691 C269.92653,9.12780817 272.464706,13.3047981 275.902242,13.3047981 C279.339778,13.3047981 281.877954,9.12780817 282.777315,10.0271691 C283.676676,10.9265301 279.499686,13.4647055 279.499686,16.9022419 C279.499686,20.3397783 283.676676,22.8779538 282.777315,23.7773147 C281.877954,24.6766757 279.339778,20.4996858 275.902242,20.4996858 Z" id="2" transform="translate(275.902242, 16.902242) rotate(-45.000000) translate(-275.902242, -16.902242) "></path><path d="M52.9022419,57.4996858 C49.4647055,57.4996858 46.9265301,61.6766757 46.0271691,60.7773147 C45.1278082,59.8779538 49.3047981,57.3397783 49.3047981,53.9022419 C49.3047981,50.4647055 45.1278082,47.9265301 46.0271691,47.0271691 C46.9265301,46.1278082 49.4647055,50.3047981 52.9022419,50.3047981 C56.3397783,50.3047981 58.8779538,46.1278082 59.7773147,47.0271691 C60.6766757,47.9265301 56.4996858,50.4647055 56.4996858,53.9022419 C56.4996858,57.3397783 60.6766757,59.8779538 59.7773147,60.7773147 C58.8779538,61.6766757 56.3397783,57.4996858 52.9022419,57.4996858 Z" id="1" transform="translate(52.902242, 53.902242) rotate(-45.000000) translate(-52.902242, -53.902242) "></path></g></g></g></svg></button><div class="serviceMenu"><ul class="menu vertical"><li><a href="' + howToReview + '" target="_blank">How to Review</a></li><li><a href="' + requestRevisions + '" target="_blank">Request Revisions</a></li><li class="' + styleGuideStatus + '"><a href="' + styleGuide + '">Style Guide</a></li><li class="' + wireframesStatus + '"><a href="' + wireframes + '">Low-fi Wireframes</a></li><li class="' + componentLibStatus + '"><a href="' + componentLib + '">Component Lib</a></li><li class="' + staticLayoutsStatus + '"><a href="' + staticLayouts + '">Static Layouts</a></li><li class="' + cmsStatus + '"><a href="' + cms + '">CMS</a></li></ul></div></div>');
  
  $('.serviceMenu-button').on('click', function(e){
      $(this).parents('#serviceMenu').toggleClass('is-active');
      e.stopPropagation();
  });
  
  $('body').on('click', function(){
      $('#serviceMenu').removeClass('is-active');
  });
};

stages();
