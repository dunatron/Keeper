<?php
namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;

class Category extends DataObject
{
    private static $db = [
        'Name' => 'Varchar(255)',
        'BgColor' => 'TractorCow\Colorpicker\Color'
    ];

    private static $has_many = [
        'CodeExamples' => CodeExample::class
    ];

    private static $default_sort = 'Created DESC';

    public function canView($member = null)
    {
        return true;
    }

}