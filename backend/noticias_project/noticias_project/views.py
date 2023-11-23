# noticias/views.py

from rest_framework import generics
from .models import Noticia, Categoria
from .serializers import NoticiaSerializer, CategoriaSerializer


class CrearNoticia(generics.CreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer

    def perform_create(self, serializer):
        # Obtener datos adicionales del usuario o de la solicitud
        # Ejemplo: usuario_actual = self.request.user
        datos_solicitud = self.request.data

        # Agregar lógica adicional antes de guardar la noticia
        # Ejemplo: serializer.save(autor=usuario_actual)
        serializer.save()  # Guardar la nueva noticia en la base de datos

class DetalleNoticia(generics.RetrieveUpdateDestroyAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer

# Otras vistas para Categoría u otras operaciones CRUD

class ListaNoticias(generics.ListCreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer

class DetalleNoticia(generics.RetrieveUpdateDestroyAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer

class ListaCategorias(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class DetalleCategoria(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
