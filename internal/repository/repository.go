package repository

import (
	"backend/internal/models"
	"database/sql"
)

type DatabaseRepo interface {
	AllMovies() ([]*models.Movie, error)
	Connection() *sql.DB
	GetUserByEmail(email string) (*models.User, error)
	GetUserByID(id int) (*models.User, error)
	OneMovieForEdit(id int) (*models.Movie, []*models.Genre, error)
	OneMovie(id int) (*models.Movie, error)
}
