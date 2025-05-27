<?php

class BDMysql
{
    private $mysqli;
    private $config;

    public function __construct($archivo = 'config.ini')
    {
        $this->config = parse_ini_file($archivo, true)['database'];
        $this->mysqli = new mysqli(
            $this->config['host'],
            $this->config['user'],
            $this->config['password'],
            $this->config['database'],
            $this->config['port']
        );

        if ($this->mysqli->connect_error) {
            $this->mysqli = null;
        } else {
            $this->mysqli->set_charset("utf8");
        }
    }

    public function query($sql)
    {
        return $this->mysqli->query($sql);
    }

    public function prepare($sql)
    {
        return $this->mysqli->prepare($sql);
    }

    public function getConexion()
    {
        return $this->mysqli;
    }
}
