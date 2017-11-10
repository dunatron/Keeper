<?php
namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;


class ComponentType extends DataObject
{
    private static $db = [
        'Name' => 'Varchar(255)'
    ];

    private static $has_many = [
        'Pages' => 'Page'
    ];

    private static $default_sort = 'Created DESC';

    public function canView($member = null)
    {
        return true;
    }

}