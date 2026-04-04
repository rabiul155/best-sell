import mongoose from 'mongoose';

export class MongoDBClient {
  private static instance: MongoDBClient;

  static getInstance() {
    if (!MongoDBClient.instance) {
      MongoDBClient.instance = new MongoDBClient();
    }

    return MongoDBClient.instance;
  }

  registerEvents() {
    mongoose.set('strictQuery', true);
    mongoose.set('debug', false);

    mongoose.connection.on('connected', () => {
      console.log(`Mongoose default connection open to ${process.env.DB_URL}`);
    });

    mongoose.connection.on('error', (err) => {
      console.log('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', () => {
      console.log(
        'Mongoose default connection disconnected through app termination',
      );
      mongoose.connection.close();
      process.exit(0);
    });
  }

  async connect(onSuccess?: () => void) {
    const options = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      autoIndex: true,
      // minPoolSize: +process.env.MONGO_MIN_POOL_SIZE!,
      // maxPoolSize: +process.env.MONGO_MAX_POOL_SIZE!,
      connectTimeoutMS: 60000,
      socketTimeoutMS: 45000,
    };

    this.registerEvents();

    try {
      await mongoose.connect(process.env.DB_URL!, options);
      console.log('Mongoose connected successfully');
      onSuccess?.();
    } catch (error) {
      console.log('Mongoose could not connect to the database: ', error);
    }
  }
}
