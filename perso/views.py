from django.shortcuts import render_to_response
from django.template import RequestContext

import logging
logger = logging.getLogger(__name__)

def home(request):
    template_context={}
    return render_to_response('home.html', template_context, RequestContext(request))

def robots(request):
    template_context={}
    return render_to_response('robots.txt', template_context, RequestContext(request))
