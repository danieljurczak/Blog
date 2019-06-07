# posts/views.py
from rest_framework import viewsets

from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


class PostViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
