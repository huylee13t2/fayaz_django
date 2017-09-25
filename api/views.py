from django.shortcuts import render
from django.db.models import Q
import json
from django.http import *
from django.views.decorators.csrf import csrf_exempt
import jwt
from django.contrib.auth.models import User, Group

from api.models import Profile


def main(request):
	return render(request, 'main.html', {})


@csrf_exempt
def register(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	email = request.POST.get('email')
	phone_number = request.POST.get('phone_number')
	city = request.POST.get('city')
	type_account = request.POST.get('type_account')

	# try:
	user = User(username = username, password=password, email=email)
	user.set_password(password)
	user.save()
	print('----> save user')

	# create token
	token = jwt.encode({'some': username}, 'secret', algorithm='HS256')
	print(token)

	account = Profile(user=user, phone=phone_number, city=city, token=token, type_account = type_account)
	account.save()
	print('-------> save account')

	response = {
		'result' : user.id
	}
	# except:
	# 	response = {
	# 		'result' : -999
	# 	}

	return JsonResponse(response)


@csrf_exempt
def login(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	print('login')
	# try:
	account = Profile.objects.get(user__username = username)
	if account.user.check_password(password):
		response = {
			'result' : account.id,
			'data' : {
				'username' : account.user.username,
				'email' : account.user.email,
				'token' : account.token,
				'avatar' : account.avatar.name,
			}
		}
	else:
		response = {
			'result' : 0,
		}
	# except:
	# 	response = {
	# 		'result' : -999,
	# 	}

	return JsonResponse(response)

