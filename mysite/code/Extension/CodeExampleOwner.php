<?php

namespace MyOrg\Extension;

use MyOrg\Model\CodeExample;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Security\Member;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;

class CodeExampleOwner extends DataExtension
{

    private static $has_many = [
        'CodeExamples' => CodeExample::class
    ];

    public function updateCMSFields(FieldList $fields)
    {
        $codeExampleField = GridField::create('CodeExamples')
            ->setList($this->owner->CodeExamples())
            ->setConfig(GridFieldConfig_RelationEditor::create());
        $fields->addFieldToTab('Root.Events', $codeExampleField);

    }
}