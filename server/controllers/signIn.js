const checkNotLogin = require('../middlewares/check').checkNotLogin;
const crypto = require('crypto');
let UserModel = require('../models/users');
module.exports = {
	'GET /home/login': async(ctx, next) => {
		// await checkNotLogin(ctx, next);
		// ctx.response.body = ctx.flash.get();
		await ctx.render("home/login",{

		})
	},
	//登录api
	'POST /api/signIn': async(ctx, next) => {
		await checkNotLogin(ctx, next);
		let signal =  ctx.flash.get(),
		code="1",message="登录成功";
		let {account,password}=ctx.request.body;
    let user = await UserModel.getUserByAccount(account);
		password = crypto.createHash('md5').update(password).digest('hex');
		if(password!==user.password){
        code="-1";
				message="用户或密码错误";
		}else{
			  delete user.password;
			  ctx.session.user = user ;
		}
		ctx.response.body={
			"code":code,
			"message":message,
			"username":user.username,
		}
	}
}
