<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usaw extends Model
{
    use HasFactory;
    protected $table = 'usaws';
    protected $fillable = ['name', 'color', 'consent_statement'];
}
