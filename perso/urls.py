from django.conf.urls.defaults import patterns

urlpatterns = patterns('perso.views',
    (r'^$', 'home'),
    (r'^robots.txt$', 'robots'),
)

