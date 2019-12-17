import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const HardwarePage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {

    setExpanded(!expanded);
  };

  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        hardwares {
          description
          descriptionMore
          title
          photo{
            url
          }
        }
      }
    }
    `}
        render={({ persons: { hardwares } }) => (
          <div className="narzedzia">
            {hardwares.map(function (item, i) {
              return (
                <div className="badania-contener">

                  <div className="badania-text-image">
                    <div className="badania-narzedzia-image" style={{ backgroundImage: `url(${item.photo.url})` }}></div>
                    <div className="badania-text">
                      <h3 className="badania-title">{item.title}</h3>
                      <Typography paragraph>
                        {item.description}
                      </Typography>

                      <div style={{ backgroundColor: "white", zIndex: 2 }}>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>

                          <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>

                        </Collapse>
                        <div
                          className="badania-more"
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more">{expanded ? "Mniej" : "Więcej"}</div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        )}

      />

    </Layout>
  )
}

export default HardwarePage
