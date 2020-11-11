import React from 'react';

import { Field, Formik } from 'formik';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { KeyboardArrowRight, Link } from '@material-ui/icons';
import styles from './index.module.css';
import { apiService } from '../service/apiService';
import CustomizedTables from '../components/table';

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className={styles.page}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: 20 }}
      >
        <Container maxWidth="xs">
          <Card>
            <CardContent>
              <Formik
                initialValues={{ url: '' }}
                onSubmit={async ({ url }, { setSubmitting }) => {
                  const data = await apiService.post('/api/short', {
                    fullUrl: url,
                  });
                  console.log(data);
                }}
                validateOnChange={false}
                validateOnBlur={true}
              >
                {({ handleSubmit, isSubmitting, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid item xs={12}>
                        <Field
                          name="url"
                          id="url"
                          type="text"
                          as={TextField}
                          label="URL"
                          variant="outlined"
                          placeholder="Insert the URL here..."
                          fullWidth
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Link />
                              </InputAdornment>
                            ),
                          }}
                          error={touched.url && errors.url ? true : false}
                          helperText={errors.url}
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={21} />
                      ) : (
                        <>
                          Generate <KeyboardArrowRight />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Formik>
            </CardContent>
          </Card>
          <br />
        </Container>
        <Container>
         <CustomizedTables />
        </Container>
      </Grid>
    </div>
  );
};
export default Index;
