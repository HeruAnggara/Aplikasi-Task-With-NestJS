'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' :
                                            'id="xs-controllers-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' :
                                        'id="xs-injectables-links-module-AppModule-f592dcfc69d56034dba763aa5bbf6727d58a325dfe9449f023ccd7929ee7d38f107fca988a6053578c065dd60cf003f2c9eb3fd59a6a39832919ffd74133c6ca"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' :
                                            'id="xs-controllers-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' :
                                        'id="xs-injectables-links-module-AuthModule-b7005d88218d569edba83b83245a70091c48aecd07ffb5cdb83a1930a10cb8d1c709d896cb18936de18bb1e0fd87e1c4b6eebf71d6da4aa08bb765d2c055031f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link" >CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' : 'data-bs-target="#xs-controllers-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' :
                                            'id="xs-controllers-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' : 'data-bs-target="#xs-injectables-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' :
                                        'id="xs-injectables-links-module-CompanyModule-d5f4b0c9ba184d3891a3131af6be882219b1fddfc128bfb323f78c10592e58e9793f00b554f62eea2f5f22ae085c6f06dc9775732852490d4873d282c96ffa1b"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                            'id="xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                        'id="xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                            'id="xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                        'id="xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompanyController.html" data-type="entity-link" >CompanyController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDTO.html" data-type="entity-link" >CreateTaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDTO.html" data-type="entity-link" >RegisterDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDTO.html" data-type="entity-link" >UpdateTaskDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link" >CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});