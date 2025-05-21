module.exports = ctx => ({
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/',
                '@public': 'public/'
            }
        }
    },
    // 站点标题
    title: 'ASUS爱速固件',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'script', { src: "/script/google-analytics.js" },
        ],
        [
            'script', { src: "https://assets.koolcenter.com/linkease-navigation-script/main.js?v=5", defer: true },
        ],
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ],
        [
            'link', { rel: 'stylesheet', href: 'https://assets.koolcenter.com/linkease-navigation-script/main.css?v=5' }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理'
        },
    },
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        // 页面配置
        locales: {
            // 中文
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '此文档有误？在 GitHub 上反馈。',
                lastUpdated: '上次更新',
                nav: [
                    { text: '产品中心', link: '/' },
                    { text: '设备', link: '/zh/guide/asus/' },
                    { text: 'FAQ', link: '/zh/guide/FAQ/' },
                    { text: '关于我们', link: 'https://www.linkease.com/about' },
                    {
                        text: '更多产品', items: [
                            { text: 'iStoreOS', link: 'https://www.istoreos.com/' },
                            { text: 'DDNSTO', link: 'https://www.ddnsto.com/' },
                            { text: 'iStore', link: 'https://doc.linkease.com/zh/guide/istore/' },
                            { text: 'EasePi', link: 'https://easepi.linkease.com/' }

                        ]
                    },
                ],
                sidebar: {
                    '/zh/guide/asus/': [
                        {
                            title: "设备列表",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "刷机说明"],
                                ["gt-be98_pro", "GT-BE98_PRO"],
                                ["gt-be96u", "GT-BE96U"],
                                ["gt-be96", "GT-BE96"],
                                ["gt-ax11000_pro", "GT-AX11000_PRO"],
                                ["gt-ax11000", "GT-AX11000"],
                                ["gt-ax6000", "GT-AX6000"], 
                                ["gs7", "ROG魔盒(GS7)"],                           
                                ["gt6", "ROG魔方幻(GT6)"],
                                
                                ["rt-be88u", "RT-BE88U"],
                                ["rt-be86u", "RT-BE86U"],
                                // ["rt-be82u", "RT-BE82U"],
                                
                                ["rt-ax92u", "RT-AX92U"],
                                ["rt-ax89x", "RT-AX89X"],
                                ["rt-ax88u_pro", "RT-AX88U_PRO"],
                                ["rt-ax88u", "RT-AX88U"],
                                ["rt-ax86u_pro", "RT-AX86U_PRO"],
                                ["rt-ax86u", "RT-AX86U"],
                                ["rt-ax82u_v2", "RT-AX82U_V2"],                           
                                ["rt-ax82u", "RT-AX82U"],
                                
                                ["rt-ax68u", "RT-AX68U"],                             
                                ["rt-ax58u", "RT-AX58U"],
                                ["rt-ax57_go", "RT-AX57_GO"],
                                ["rt-ax57", "RT-AX57"],
                                ["rt-ax56u_v2", "RT-AX56U_V2"],
                                ["rt-ax56u", "RT-AX56U"],

                                ["gt-ac5300", "GT-AC5300"],
                                ["gt-ac2900", "GT-AC2900"],
                                ["rt-ac86u", "RT-AC86U"],
                                                         
                                ["tuf-be6500", "TUF-BE6500"],
                                ["tuf-be3600", "TUF-BE3600"],                                                                                       
                                ["tx-ax6000", "TX-AX6000"],
                                ["tuf-ax5400_v2", "TUF-AX5400_V2"],
                                ["tuf-ax5400", "TUF-AX5400"],
                                ["tuf-ax4200", "TUF-AX4200"],
                                ["tuf-ax3000_v2", "TUF-AX3000_V2"],
                                ["tuf-ax3000", "TUF-AX3000"],
                                
                                ["zenwifi-pro-xt12", "ZenWiFi-Pro-XT12"],  
                                ["zenwifi-xt9", "ZenWiFi-XT9"],
                                ["zenwifi-xt8", "ZenWiFi-XT8"],
                                ["zenwifi-et8", "ZenWiFi-ET8"],
                                ["zenwifi-bd4", "ZenWiFi-BD4"],                            
                                ["zenwifi-xd4", "ZenWiFi-XD4"],                            
                            ]
                        },
                    ],

                    '/zh/guide/FAQ/': [
                        {
                            title: "FAQ",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "问题答疑"],
                            ]
                        },
                    ],
 				
                    '/zh/guide/about/': [
                        {
                            title: "关于我们",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                            ]
                        },
                    ],
                }
            },
        },
        // 最后更新时间
        // lastUpdated: 'Last Updated', // string | boolean
        // 搜索
        // search: false,
        // searchMaxSuggestions: 10,
        docsRepo: 'linkease/doc.asusgo.com',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
    },
})
