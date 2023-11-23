from django.urls import path
from . import views

urlpatterns = [
    path('crear-noticia/', views.CrearNoticia.as_view(), name='crear_noticia'),
    path('noticia/<int:pk>/', views.DetalleNoticia.as_view(), name='detalle_noticia'),
    # Otras URLs para operaciones CRUD o modelos adicionales
]
