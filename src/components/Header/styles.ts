import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);
