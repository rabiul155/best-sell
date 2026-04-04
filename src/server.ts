import app from './app';
import { MongoDBClient } from './provider/MongodbClient';

require('dotenv').config();

MongoDBClient.getInstance().connect(() => {
  app.listen(process.env.HTTP_PORT, () => {
    console.log(
      new Date(),
      `HTTP server is running on port: ${process.env.HTTP_PORT}`,
    );
  });
});
