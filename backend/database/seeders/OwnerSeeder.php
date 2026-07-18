<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;


class OwnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [
                'email' => 'owner@clinic.test',
            ],
            [
                'name' => 'Clinic Owner',
                'email' => 'owner@clinic.test',
                'password' => 'password',
                'phone' => '01000000000',
                'title' => 'Dr.',
                'professional_title' => 'Clinic Owner',
                'bio' => 'Initial system administrator.',
                'employment_status' => 'active',
            ]
        );
    }
}
