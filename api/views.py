from django.shortcuts import render
from django.db.models import Q
import json
from django.http import *
from django.views.decorators.csrf import csrf_exempt
import jwt
from django.contrib.auth.models import User, Group

from api.models import Profile


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

