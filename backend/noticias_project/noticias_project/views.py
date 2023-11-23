# noticias/views.py

from rest_framework import generics
from .models import Noticia, Categoria
from .serializers import NoticiaSerializer, CategoriaSerializer

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
