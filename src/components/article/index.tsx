import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ArticleAttr } from "../../services/city/types";
//import './index.css'

type ArticleProps = {
  article: ArticleAttr
}
export const Article = ({article}:ArticleProps) => {
  return (
    <Card sx={{ maxWidth: 340 }}>
    <CardMedia
      component="img"
      alt={article.source.name}
      height="140"
      image={article.urlToImage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {article.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <small>
          Ver artículo completo
        </small>
      </a>
        </Button>
    </CardActions>
  </Card>
  )
}
