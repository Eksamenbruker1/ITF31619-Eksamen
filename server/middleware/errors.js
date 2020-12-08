import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    if (err.name === "CastError") {
      const message = `Fant ikke ressursen du ser etter. Invalid ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 6) {
      const message = 'MongoDB verten ble funnet men kunne ikke oppnå forbindelse. Beklager, prøv igjen senere.';
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 7) {
      const message = 'MongoDB verten ble ikke funnet, muligens så har MongoDB serveren tatt kvelden. Vennligst vent til vi slukker brannen';
      error = new ErrorHandler(message, 404);
    }

    if (err.code === 89) {
      const message = 'MongoDB serveren klarte ikke å respondere til forespørselen, prøv igjen senere';
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 11000) {
      const message = `Duplikat av ${Object.keys(err.keyValue)}`;
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
