module.exports = {
	//webpack扩展
	configureWebpack: {
		devServer: {
			// port:8089,//端口号
			open: true, //浏览器自动打开
			//Mock接口编写的地方
			before(app) {
				// app.get('请求地址',(req,res)=>{'回调方法'})
				//用户信息池
				let userpoor = [{
						username: 'admin',
						password: '123456'
					},
					{
						username: 'yang',
						password: '123456'
					}
				]
				//注册接口
				app.get('/api/reg', (req, res) => {
					const {
						username,
						password
					} = req.query;
					var userlength = userpoor.filter(v => v.username == username).length
					console.log(userlength)
					if (userlength > 0) {
						res.json({
							success: false,
							msg: "用户名已存在"
						})
					} else {
						res.json({
							success: true,
							msg: '注册成功'
						})
					}
				})
				//登录接口
				let tokenkey = "yangxiaohua";
				app.get('/api/login', (req, res) => {
					const {
						username,
						password
					} = req.query;
					if (username == "admin" && password == "123456" || username == "yang" && password == "123456") {
						res.json({
							code: 0,
							msg: '登录成功',
							token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
						})
					} else {
						res.json({
							code: 1,
							msg: "帐号或密码错误"
						})
					}
				})
				//首页的banner图
				app.get('/api/banner', (req, res) => {
					res.json({
						code: 0,
						data: [{
							imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560405203685&di=d7541940850e3e20e90239f08a2d826a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01084f5951fc51a8012193a3eddb28.jpg",
							toUrl: "/",
						}, {
							imgUrl: "https://img.zcool.cn/community/01e0465951fc4da8012193a3ffad27.jpg@1280w_1l_2o_100sh.jpg",
							toUrl: "/"
						}, {
							imgUrl: "https://img.zcool.cn/community/0177965951fc4ea8012193a3d40ba5.jpg@1280w_1l_2o_100sh.jpg",
							toUrl: "/"
						}],

					})
				})
				//得到首页的小的类别
				app.get('/api/lists', (req, res) => {
					res.json({
						code: 0,
						data: [
							[{
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								},
								{
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882099&di=6ecd1877d415d749b724b6621a045b28&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20118%2F580%2Fw690h690%2F20190515%2Fa1cb-hwzkfpu4111432.jpg",
									label: "分类一"
								}
							],
							[{
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								},
								{
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}, {
									url: "/",
									image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560502882102&di=e0b2593b0b15a10a93693ae95b870d60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F23%2F20181123000421_oldkq.thumb.700_0.jpeg",
									label: "分类二"
								}
							]
						]
					})
				})
			}
		}
	},

	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
					'./src/theme'
				]
			}
		}
	},

	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
}