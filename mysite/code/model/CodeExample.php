<?php

namespace MyOrg\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;

class CodeExample extends DataObject
{

    private static $db = [
        'Title' => 'Text',
        'Body'  =>  'HTMLText'
    ];

    private static $has_one = [
        'Owner' =>  Member::class,
        'Category'  => Category::class
    ];

    private static $default_sort = 'Created DESC';

    public function canView($member = null)
    {
        return true;
    }

}