from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^$', views.main, name='main'),
    # url(r'^api/search$', views.search, name='search'),
    # user
    url(r'^api/register$', views.register, name='register'),
    url(r'^api/login$', views.login, name='login'),
]

