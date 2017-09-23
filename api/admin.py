from django.contrib import admin
from api.models import Profile


class ProfileAdmin(admin.ModelAdmin):
	list_display = ['fullname', 'user', 'avatar', 'updated_by']


admin.site.register(Profile, ProfileAdmin)
