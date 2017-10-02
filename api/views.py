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
def get_user(request):
	token = request.POST.get('token')

	# try:
	profile = Profile.objects.get(token = token)

	response = {
		'result' : profile.user.id,
		'data' : {
			'username' : profile.user.username,
			'email' : profile.user.email,
			'fullname' : profile.fullname,
			'avatar' : profile.avatar.name,
			'phone' : profile.phone,
			'city' : profile.city,
			'type_account' : profile.type_account,
			'updated' : profile.updated,
			'created' : profile.created,
			'invite' : profile.invite,
		}
	}

	# except:
	# 	response = {
	# 		'result' : -999,
	# 	}

	return JsonResponse(response)


@csrf_exempt
def invite(request):
	token = request.POST.get('token')

	try:
		profile = Profile.objects.get(token = token)
		profile.invite += 1
		profile.save()

		response = {
			'result' : profile.user.id,
		}

	except:
		response = {
			'result' : -999
		}

	return JsonResponse(response)


@csrf_exempt
def register(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	email = request.POST.get('email')
	phone_number = request.POST.get('phone_number')
	city = request.POST.get('city')
	type_account = request.POST.get('type_account')

	try:
		user = User(username = username, password=password, email=email)
		user.set_password(password)
		user.save()
		print('----> save user')

		# create token
		token = jwt.encode({'some': username}, 'secret', algorithm='HS256')
		print(token)

		account = Profile(user=user, phone=phone_number, city=city, token=token, type_account = type_account, updated_by = user, created_by=user)
		account.save()
		print('-------> save account')

		# timezone.now()

		response = {
			'result' : user.id
		}
	except:
		response = {
			'result' : -999
		}

	return JsonResponse(response)


@csrf_exempt
def login(request):
	username = request.POST.get('username')
	password = request.POST.get('password')
	print('login')
	try:
		account = Profile.objects.get(user__username = username)
		if account.user.check_password(password):
			response = {
				'result' : account.id,
				'data' : {
					'username' : account.user.username,
					'email' : account.user.email,
					'token' : account.token,
					'avatar' : account.avatar.name,
					'invite' : account.invite,
				}
			}
		else:
			response = {
				'result' : 0,
			}
	except:
		response = {
			'result' : -999,
		}

	return JsonResponse(response)

