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

const SoftWarePage = () => {
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
        softwares {
          description
          descriptionMore

          photo{
            url
          }
        }
      }
    }
    `}
        render={({ persons: { softwares } }) => (
          <div className="narzedzia">
            {softwares.map(function (item, i) {
              return (
                <div className="badania-contener">

                  <div className="badania-text-image">
                    <div className="badania-narzedzia-image" style={{ backgroundImage: `url(${item.photo.url})` }}></div>
                    <div className="badania-text">
                      <h3 className="badania-title">Narzędzie software</h3>
                      <Typography paragraph>
                      {item.description}
                      </Typography>
                      <div style={{ backgroundColor: "white", zIndex: 2 }}>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>

                          <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
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

export default SoftWarePage
