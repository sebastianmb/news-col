from rest_framework import serializers
from .models import Noticia, Categoria

class NoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = '__all__'  # Puedes especificar los campos que deseas incluir

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'  # Puedes especificar los campos que deseas incluir
