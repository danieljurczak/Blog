from rest_framework import routers
from posts import views as posts_views

router = routers.DefaultRouter()
router.register(r'post', posts_views.PostViewset)
router.register(r'comment', posts_views.CommentViewset)
