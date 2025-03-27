var ValidatorService = function ($rootScope) {
    var othersCategoryValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                OthersCategoryName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others category name is required and cannot be empty'
                        }
                    }
                }

            }
        })
            .on('success.form.fv', function (e) {
                e.preventDefault();

                var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
                fv.defaultSubmit();

            })

            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })

            .on('success.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }

            });
    }

    var membershipTypeBookingControlValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                StarTime: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Start time is required and cannot be empty'
                        }
                    }
                },
                EndTime: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'End time is required and cannot be empty'
                        }
                    }
                }

            }
        })
            .on('success.form.fv', function (e) {
                e.preventDefault();

                var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
                fv.defaultSubmit();

            })

            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })

            .on('success.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }

            });
    }
    var othersSubCategoryValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                OthersSubCategoryName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others sub category name is required and cannot be empty'
                        }
                    }
                },
                OthersCategoryID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others category is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var othersValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                OthersCategoryID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others category is required and cannot be empty'
                        }
                    }
                },
                OthersSubCategoryID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others sub category is required and cannot be empty'
                        }
                    }
                },
                OthersName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Others name is required and cannot be empty'
                        }
                    }
                },
                ShortName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Short name is required and cannot be empty'
                        }
                    }
                },
                TaxID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Tax Profile is required and cannot be empty'
                        }
                    }
                },
                IncomeCenterID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Income center is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var membershipGroupValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                MembershipGroupName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership group name is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var membershipSubGroupValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                SubGroupName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership sub group name is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var membershipTypeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                MembershipTypeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership type name is required and cannot be empty'
                        }
                    }
                }, MembershipGroupID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership group is required and cannot be empty'
                        }
                    }
                }, SubGroupID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership sub group is required and cannot be empty'
                        }
                    }
                }, Gender: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Gender is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var membershipFeeGroupValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                FeeGroupName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership fee group name is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var membershipFeeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                FeeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership fee name is required and cannot be empty'
                        }
                    }
                },
                IncomeCenterID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Income center is required and cannot be empty'
                        }
                    }
                },
                FeeGroupID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Membership fee group is required and cannot be empty'
                        }
                    }
                },
                Manual: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Display method is required and cannot be empty'
                        }
                    }
                },
                TaxID: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Tax profile is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var bankAccountTypeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                BankAccountTypeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Bank account type is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var terminationCodeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                TerminationCodeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Termination code name is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var guestMedicalValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                MedicalType: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Medical Type is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var guestInterestValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                PDDesc: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Interest descript is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var bankValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                BankName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Bank name is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var holidayValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {

                HolidayDesc: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Holiday description is required and cannot be empty'
                        }
                    }
                }
            },
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var guestPreferenceConfigurationValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                PreferenceName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    var commentGroupValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                CommentGroupName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Comment Group name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var commentSectionValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                SectionName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Section name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var commentStatusValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                CommentStatusName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Comment Status Name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var modifyCodeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                ModifyCodeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Modify Code Name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var comdoBuildingValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                BuildingName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Building Name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var comdoRoomAttributeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                AttributeName: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'Attribute Name is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var comdoSpaceTypeValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled',
            fields: {
                SpaceTypeCode: {
                    trigger: 'blur',
                    validators: {
                        notEmpty: {
                            message: 'SpaceType Code is required and cannot be empty'
                        }
                    }
                }
            }
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };
    var formValidator = function (form) {
        $(form).formValidation({
            framework: 'bootstrap',
            icon: {

            },
            excluded: ':disabled'
        })
        .off('success.form.fv')
        .on('success.form.fv', function (e) {
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            fv.defaultSubmit();

        })
            .on('err.field.fv', function (e, data) {
                if (data.fv.getSubmitButton()) {
                    data.fv.disableSubmitButtons(false);
                }
            })
        .on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        });
    };

    

    return {
        othersCategoryValidator: othersCategoryValidator,
        othersSubCategoryValidator: othersSubCategoryValidator,
        othersValidator: othersValidator,
        membershipGroupValidator: membershipGroupValidator,
        membershipSubGroupValidator: membershipSubGroupValidator,
        membershipTypeValidator: membershipTypeValidator,
        membershipFeeGroupValidator: membershipFeeGroupValidator,
        membershipFeeValidator: membershipFeeValidator,
        bankAccountTypeValidator: bankAccountTypeValidator,
        terminationCodeValidator: terminationCodeValidator,
        guestMedicalValidator: guestMedicalValidator,
        guestInterestValidator: guestInterestValidator,
        bankValidator: bankValidator,
        holidayValidator: holidayValidator,
        membershipTypeBookingControlValidator: membershipTypeBookingControlValidator,
        guestPreferenceConfigurationValidator: guestPreferenceConfigurationValidator,
        commentGroupValidator: commentGroupValidator,
        commentSectionValidator: commentSectionValidator,
        commentStatusValidator: commentStatusValidator,
        modifyCodeValidator: modifyCodeValidator,
        comdoBuildingValidator: comdoBuildingValidator,
        comdoRoomAttributeValidator: comdoRoomAttributeValidator,
        comdoSpaceTypeValidator: comdoSpaceTypeValidator,
        formValidator: formValidator
    }
};
ValidatorService.$inject = ['$rootScope'];