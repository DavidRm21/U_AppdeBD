from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/', include('applications.languageInfo.urls')),
    re_path('api/', include('applications.country.urls')),
    re_path('api/', include('applications.city.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
