package core

type EsiDocumentationError struct {
	IsEsiDocumentationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewEsiDocumentationError(code string, msg string, ctx *Context) *EsiDocumentationError {
	return &EsiDocumentationError{
		IsEsiDocumentationError: true,
		Sdk:              "EsiDocumentation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *EsiDocumentationError) Error() string {
	return e.Msg
}
