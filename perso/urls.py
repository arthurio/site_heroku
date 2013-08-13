from django.conf.urls.defaults import patterns

urlpatterns = patterns('perso.views',
    (r'^$', 'index'),
    (r'^robots.txt$', 'robots'),
)

