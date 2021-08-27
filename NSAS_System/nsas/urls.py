from django.conf.urls import url
from . import views
app_name = 'nsas'

urlpatterns = [
    url(r'^$', views.Routing, name='RoutingList'),

]
