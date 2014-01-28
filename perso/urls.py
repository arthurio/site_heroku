from django.conf.urls import patterns
from django.views.generic.base import TemplateView

urlpatterns = patterns('perso.views',
    (r'^$', TemplateView.as_view(template_name='index.html')),
    (r'^resume/$', TemplateView.as_view(template_name='resume.html')),
    (r'^robots.txt$', TemplateView.as_view(template_name='robots.html')),
    (r'^humans.txt$', TemplateView.as_view(template_name='humans.html')),
)

