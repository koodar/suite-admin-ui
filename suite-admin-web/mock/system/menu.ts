export default [
    {
      url: '/menus',
      timeout: 1000,
      method: 'get',
      response: () => {
        return {
            "code": 200,
            "message": "OK",
            "devMessage": null,
            "data": [
                {
                    "name": "dashboard",
                    "title": "Dashboard",
                    "path": "/dashboard",
                    "redirect": null,
                    "component": "LAYOUT",
                    "meta": {
                        "title": "Dashboard",
                        "icon": "DashboardOutlined",
                        "sort": 1,
                        "keepAlive": true,
                        "permissions": null
                    },
                    "children": [
                        {
                            "name": "dashboard_index",
                            "title": "工作台",
                            "path": "index",
                            "redirect": null,
                            "component": "/system/dashboard/index",
                            "meta": {
                                "title": "工作台",
                                "icon": null,
                                "sort": 0,
                                "keepAlive": true,
                                "permissions": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "name": "auth",
                    "title": "权限管理",
                    "path": "/auth",
                    "redirect": null,
                    "component": "LAYOUT",
                    "meta": {
                        "title": "权限管理",
                        "icon": "SecurityScanOutlined",
                        "sort": 2,
                        "keepAlive": true,
                        "permissions": null
                    },
                    "children": [
                        {
                            "name": "system_user",
                            "title": "用户管理",
                            "path": "user",
                            "redirect": null,
                            "component": "/system/user/user",
                            "meta": {
                                "title": "用户管理",
                                "icon": null,
                                "sort": 0,
                                "keepAlive": true,
                                "permissions": null
                            },
                            "children": []
                        },
                        {
                            "name": "system_role",
                            "title": "角色管理",
                            "path": "role",
                            "redirect": null,
                            "component": "/system/role/role",
                            "meta": {
                                "title": "角色管理",
                                "icon": null,
                                "sort": 0,
                                "keepAlive": true,
                                "permissions": null
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "name": "system",
                    "title": "系统管理",
                    "path": "/system",
                    "redirect": null,
                    "component": "LAYOUT",
                    "meta": {
                        "title": "系统管理",
                        "icon": "ControlOutlined",
                        "sort": 3,
                        "keepAlive": true,
                        "permissions": null
                    },
                    "children": [
                        {
                            "name": "system_menu",
                            "title": "菜单权限",
                            "path": "menu",
                            "redirect": null,
                            "component": "/system/menu/menu",
                            "meta": {
                                "title": "菜单权限",
                                "icon": null,
                                "sort": 0,
                                "keepAlive": true,
                                "permissions": null
                            },
                            "children": []
                        }
                    ]
                }
            ]
        };
      },
    },
  ];
  