if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),b={module:{uri:c},exports:r,require:d};s[c]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Paper Reading"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/1101.RESCAL-and-extensions.html.89f09e15.js",revision:"1fc5b0cce75a7b4d1f1a02abb29ff3df"},{url:"assets/1101.RESCAL-and-extensions.html.c8637b54.js",revision:"476f5afa12f69ea80fb6a3d2e035c5e8"},{url:"assets/1312.TransE.html.27b75f52.js",revision:"cf68e9f1d471894b2f067fe7d5605f80"},{url:"assets/1312.TransE.html.ad84bde5.js",revision:"006604364aff3190db90f66a3f4fde65"},{url:"assets/404.html.2cfc8f35.js",revision:"4a9e976562bb813b13868d57774eadac"},{url:"assets/404.html.f04040b7.js",revision:"7b652b8f580edeee11bd8b2f4d7050a6"},{url:"assets/app.57bb16b9.js",revision:"2803dbea3ebdd11eb89e4554265f8199"},{url:"assets/auto.56c9cb2e.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/giscus.9450116b.js",revision:"392635d8b4f5a440e4c3479328777254"},{url:"assets/highlight.esm.9b852bc5.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/index.d2b3e8c7.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.025e55d6.js",revision:"4f349def74cfcc0294ba43ecc6760eaa"},{url:"assets/index.html.0cf4c89f.js",revision:"90698419561e1a4cbfecf7224ab72452"},{url:"assets/index.html.18829763.js",revision:"8336cc081d4cbad66381f8d82a3fcaa6"},{url:"assets/index.html.2df30a2c.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.301f7ece.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.3242c8e9.js",revision:"7ffd552d9c38f8b235187d2e86b9a34d"},{url:"assets/index.html.4ba3b5eb.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.70aef2e0.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.7c533ba3.js",revision:"918d680422ac32c49d3385f4ec8880e1"},{url:"assets/index.html.9b252ff0.js",revision:"c1cddf980a827b672c0fcae35c3382ed"},{url:"assets/index.html.ad1a4536.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.bf4e10c4.js",revision:"b3a23868fe2fb9f5f9cab4417394af5f"},{url:"assets/index.html.ca1d8f58.js",revision:"a0ff0685aebed0688221d46280950325"},{url:"assets/index.html.ca8c492f.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.cb896342.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.d5aa7f08.js",revision:"439149d6ebce57b3c46443ce9923e3c3"},{url:"assets/index.html.d9d502e3.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.e2b975df.js",revision:"0ff72086938664a3c7bbb3bf4da1221f"},{url:"assets/index.html.e55a99fd.js",revision:"062b062588f9760c5871b2aad08dbc33"},{url:"assets/index.html.e6da1560.js",revision:"c498151e5fb4ba5a98430ba475d3fbe2"},{url:"assets/index.html.f79fb9bd.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/index.html.fb561c75.js",revision:"91c763aa1b6f87815cc5f3d0f1a930c0"},{url:"assets/intro.html.7d90c613.js",revision:"88d09479f47e60b7f130f19e8ad725ed"},{url:"assets/intro.html.bc082fec.js",revision:"31b66aeed27a78b5553efb121d1f92b4"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.77e8db25.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.cb9d4be3.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.0e041931.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.62c5f19d.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/photoswipe.esm.f594e77b.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/search.esm.04894411.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.94b3cc57.js",revision:"f25ddf688ea1fb69b7bb62d4b87b1f00"},{url:"assets/slides.html.f2cfc20e.js",revision:"6674c7fb32b6e29fb637290293c41d39"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.fcfcd4c6.css",revision:"2189ee09755e8d06f5f44cad96401f11"},{url:"assets/vue-repl.f49a7152.js",revision:"31869bc07f05cda013b3e137a7792ccf"},{url:"assets/VuePlayground.fa9c6f65.js",revision:"32b7e75418870809b3ada9aef33e4b2e"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"6c07e517dd1924d07a46399cb9a997c9"},{url:"article/index.html",revision:"96c69a3e4466f620d4b03b52f3116981"},{url:"category/index.html",revision:"f8398cd32a655b2f059fbe735f00515f"},{url:"category/krl/index.html",revision:"4298f6ab1739a3f5b5e2f98ba226709e"},{url:"encrypted/index.html",revision:"f1371766d0fca335c1a2c99d9618938f"},{url:"index.html",revision:"10a530a3453cc676261daf1b2a15568b"},{url:"intro.html",revision:"f3d30218a12e08ae65c520486f551669"},{url:"KG/KRL/1101.RESCAL-and-extensions.html",revision:"599c5e9036e0e409d699144fa6d5ea44"},{url:"KG/KRL/1312.TransE.html",revision:"84638a1b40918776a5146e351789446b"},{url:"slide/index.html",revision:"5e317b5ed047ed116c7d645485308c70"},{url:"slides.html",revision:"edf92d37002fa311804a355540093c53"},{url:"star/index.html",revision:"e5be81e7dd8a6e305552b703bb8609f6"},{url:"tag/index.html",revision:"6543269eb01eda88605bf3fe09df2675"},{url:"tag/kg/index.html",revision:"74bef22eac62941b1d8f20d8be3dc573"},{url:"tag/star-5/index.html",revision:"8ad3f57e3e9df9583e3ed7a2296edd4e"},{url:"timeline/index.html",revision:"0155fc2ab5141432c759ad38593b0ea9"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"65b33159effaee69962d2c6db1563e56"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
