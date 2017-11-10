<?php

use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\Tab;
use MyOrg\Model\ComponentType;
use SilverStripe\Forms\CompositeField;
use SilverStripe\Forms\DropdownField;

class Page extends SiteTree
{
    private static $db = [
        'Test'  =>  'Text'
    ];

    private static $has_one = [
        'ComponentType' => ComponentType::class
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $testField = TextField::create('Test', 'My Test');

        $componentType = CompositeField::create(

            DropdownField::create(
                'ComponentTypeID',
                'Choose A Component Type',
                ComponentType::get()->map('ID', 'Name')->toArray(),
                null,
                true
            )

        );

        $fields->addFieldsToTab('Root.ReactConfig', [
            $testField,
            $componentType
        ]);

        return $fields;
    }
}

