import React from "react";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "react-toolbox/lib/card";
import "./App.scss";
import { Button } from "react-toolbox/lib/button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const ProfileIntro = () => {
  const dummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card xs={12} className="ProfileIntro">
          <CardTitle
            avatar="https://placeimg.com/80/80/animals"
            title="Avatar style title"
            subtitle="Subtitle here"
          />
          <CardMedia
            aspectRatio="wide"
            image="https://placeimg.com/800/450/nature"
          />
          <CardTitle title="Title goes here" subtitle="Subtitle here" />
          <CardText>{dummyText}</CardText>
          <CardActions>
            <Button label="Action 1" />
            <Button label="Action 2" />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileIntro;

// https://github.com/react-toolbox/react-toolbox

// https://codesandbox.io/s/l8z4m

// https://material-ui.com/components/cards/
