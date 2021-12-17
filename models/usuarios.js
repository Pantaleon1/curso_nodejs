const usuariosQueries = {
    insertUsuario: `
      INSERT INTO
      usuarios(
          nombre,
          email,
          password,
          status
      )
      VALUES
      (?, ?, ?, ?)
    `,
    lelectUsuarios: `
      SELECT
        *
      FROM
        usuarios
      WHERE
        status = 1
    `
};